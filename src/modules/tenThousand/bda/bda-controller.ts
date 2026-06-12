import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bda")
export default class BdaController {
  @operation({
    summary: "Get Bda",
  })
  @get()
  static getBda = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bda",
  })
  @post("{id}")
  static createBda = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
