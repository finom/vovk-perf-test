import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kxq")
export default class KxqController {
  @operation({
    summary: "Get Kxq",
  })
  @get()
  static getKxq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kxq",
  })
  @post("{id}")
  static createKxq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
