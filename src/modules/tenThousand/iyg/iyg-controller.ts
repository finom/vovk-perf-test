import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iyg")
export default class IygController {
  @operation({
    summary: "Get Iyg",
  })
  @get()
  static getIyg = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Iyg",
  })
  @post("{id}")
  static createIyg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
