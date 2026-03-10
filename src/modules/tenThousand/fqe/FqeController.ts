import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fqe")
export default class FqeController {
  @operation({
    summary: "Get Fqe",
  })
  @get()
  static getFqe = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fqe",
  })
  @post("{id}")
  static createFqe = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
