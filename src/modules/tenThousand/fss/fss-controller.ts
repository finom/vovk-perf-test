import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fss")
export default class FssController {
  @operation({
    summary: "Get Fss",
  })
  @get()
  static getFss = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fss",
  })
  @post("{id}")
  static createFss = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
