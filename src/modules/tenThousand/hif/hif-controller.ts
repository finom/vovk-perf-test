import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hif")
export default class HifController {
  @operation({
    summary: "Get Hif",
  })
  @get()
  static getHif = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hif",
  })
  @post("{id}")
  static createHif = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
