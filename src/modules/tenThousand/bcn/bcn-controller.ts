import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bcn")
export default class BcnController {
  @operation({
    summary: "Get Bcn",
  })
  @get()
  static getBcn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bcn",
  })
  @post("{id}")
  static createBcn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
