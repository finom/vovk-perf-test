import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("itt")
export default class IttController {
  @operation({
    summary: "Get Itt",
  })
  @get()
  static getItt = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Itt",
  })
  @post("{id}")
  static createItt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
