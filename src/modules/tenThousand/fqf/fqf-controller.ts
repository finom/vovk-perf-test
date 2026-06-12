import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fqf")
export default class FqfController {
  @operation({
    summary: "Get Fqf",
  })
  @get()
  static getFqf = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fqf",
  })
  @post("{id}")
  static createFqf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
