import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fnj")
export default class FnjController {
  @operation({
    summary: "Get Fnj",
  })
  @get()
  static getFnj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fnj",
  })
  @post("{id}")
  static createFnj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
