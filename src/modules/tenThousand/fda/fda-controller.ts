import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fda")
export default class FdaController {
  @operation({
    summary: "Get Fda",
  })
  @get()
  static getFda = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fda",
  })
  @post("{id}")
  static createFda = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
