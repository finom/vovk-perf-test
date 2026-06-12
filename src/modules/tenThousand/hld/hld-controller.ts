import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hld")
export default class HldController {
  @operation({
    summary: "Get Hld",
  })
  @get()
  static getHld = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hld",
  })
  @post("{id}")
  static createHld = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
