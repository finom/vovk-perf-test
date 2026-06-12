import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("rw")
export default class RwController {
  @operation({
    summary: "Get Rw",
  })
  @get()
  static getRw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Rw",
  })
  @post("{id}")
  static createRw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
