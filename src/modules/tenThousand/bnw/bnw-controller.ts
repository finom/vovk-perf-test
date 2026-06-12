import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bnw")
export default class BnwController {
  @operation({
    summary: "Get Bnw",
  })
  @get()
  static getBnw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bnw",
  })
  @post("{id}")
  static createBnw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
