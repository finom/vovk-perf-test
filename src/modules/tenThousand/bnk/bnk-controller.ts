import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bnk")
export default class BnkController {
  @operation({
    summary: "Get Bnk",
  })
  @get()
  static getBnk = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bnk",
  })
  @post("{id}")
  static createBnk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
