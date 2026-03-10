import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eer")
export default class EerController {
  @operation({
    summary: "Get Eer",
  })
  @get()
  static getEer = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Eer",
  })
  @post("{id}")
  static createEer = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
