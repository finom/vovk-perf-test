import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cyn")
export default class CynController {
  @operation({
    summary: "Get Cyn",
  })
  @get()
  static getCyn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cyn",
  })
  @post("{id}")
  static createCyn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
