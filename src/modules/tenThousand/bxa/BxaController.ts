import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bxa")
export default class BxaController {
  @operation({
    summary: "Get Bxa",
  })
  @get()
  static getBxa = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bxa",
  })
  @post("{id}")
  static createBxa = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
