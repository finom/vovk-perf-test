import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bvu")
export default class BvuController {
  @operation({
    summary: "Get Bvu",
  })
  @get()
  static getBvu = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bvu",
  })
  @post("{id}")
  static createBvu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
