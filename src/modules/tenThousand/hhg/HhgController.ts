import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hhg")
export default class HhgController {
  @operation({
    summary: "Get Hhg",
  })
  @get()
  static getHhg = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hhg",
  })
  @post("{id}")
  static createHhg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
