import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dda")
export default class DdaController {
  @operation({
    summary: "Get Dda",
  })
  @get()
  static getDda = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dda",
  })
  @post("{id}")
  static createDda = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
