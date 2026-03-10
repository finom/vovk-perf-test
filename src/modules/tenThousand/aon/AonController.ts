import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aon")
export default class AonController {
  @operation({
    summary: "Get Aon",
  })
  @get()
  static getAon = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Aon",
  })
  @post("{id}")
  static createAon = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
