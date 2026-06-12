import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lho")
export default class LhoController {
  @operation({
    summary: "Get Lho",
  })
  @get()
  static getLho = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lho",
  })
  @post("{id}")
  static createLho = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
