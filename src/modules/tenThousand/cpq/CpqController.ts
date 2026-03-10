import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cpq")
export default class CpqController {
  @operation({
    summary: "Get Cpq",
  })
  @get()
  static getCpq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cpq",
  })
  @post("{id}")
  static createCpq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
