import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cql")
export default class CqlController {
  @operation({
    summary: "Get Cql",
  })
  @get()
  static getCql = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cql",
  })
  @post("{id}")
  static createCql = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
