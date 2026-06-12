import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("rf")
export default class RfController {
  @operation({
    summary: "Get Rf",
  })
  @get()
  static getRf = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Rf",
  })
  @post("{id}")
  static createRf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
