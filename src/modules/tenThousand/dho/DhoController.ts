import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dho")
export default class DhoController {
  @operation({
    summary: "Get Dho",
  })
  @get()
  static getDho = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dho",
  })
  @post("{id}")
  static createDho = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
