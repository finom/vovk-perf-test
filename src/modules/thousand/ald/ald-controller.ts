import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ald")
export default class AldController {
  @operation({
    summary: "Get Ald",
  })
  @get()
  static getAld = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ald",
  })
  @post("{id}")
  static createAld = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
