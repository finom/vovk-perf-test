import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dbt")
export default class DbtController {
  @operation({
    summary: "Get Dbt",
  })
  @get()
  static getDbt = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dbt",
  })
  @post("{id}")
  static createDbt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
