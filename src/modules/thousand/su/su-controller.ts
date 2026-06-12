import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("su")
export default class SuController {
  @operation({
    summary: "Get Su",
  })
  @get()
  static getSu = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Su",
  })
  @post("{id}")
  static createSu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
