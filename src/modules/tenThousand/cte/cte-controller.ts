import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cte")
export default class CteController {
  @operation({
    summary: "Get Cte",
  })
  @get()
  static getCte = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cte",
  })
  @post("{id}")
  static createCte = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
