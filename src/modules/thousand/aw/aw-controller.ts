import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aw")
export default class AwController {
  @operation({
    summary: "Get Aw",
  })
  @get()
  static getAw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Aw",
  })
  @post("{id}")
  static createAw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
