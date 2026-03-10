import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dzi")
export default class DziController {
  @operation({
    summary: "Get Dzi",
  })
  @get()
  static getDzi = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dzi",
  })
  @post("{id}")
  static createDzi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
