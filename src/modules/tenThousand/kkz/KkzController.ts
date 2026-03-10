import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kkz")
export default class KkzController {
  @operation({
    summary: "Get Kkz",
  })
  @get()
  static getKkz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kkz",
  })
  @post("{id}")
  static createKkz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
