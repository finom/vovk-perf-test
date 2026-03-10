import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bo")
export default class BoController {
  @operation({
    summary: "Get Bo",
  })
  @get()
  static getBo = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bo",
  })
  @post("{id}")
  static createBo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
