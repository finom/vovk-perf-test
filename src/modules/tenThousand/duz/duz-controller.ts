import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("duz")
export default class DuzController {
  @operation({
    summary: "Get Duz",
  })
  @get()
  static getDuz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Duz",
  })
  @post("{id}")
  static createDuz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
