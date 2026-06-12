import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kxz")
export default class KxzController {
  @operation({
    summary: "Get Kxz",
  })
  @get()
  static getKxz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kxz",
  })
  @post("{id}")
  static createKxz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
