import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fvc")
export default class FvcController {
  @operation({
    summary: "Get Fvc",
  })
  @get()
  static getFvc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fvc",
  })
  @post("{id}")
  static createFvc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
