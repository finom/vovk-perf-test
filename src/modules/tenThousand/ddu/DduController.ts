import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ddu")
export default class DduController {
  @operation({
    summary: "Get Ddu",
  })
  @get()
  static getDdu = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ddu",
  })
  @post("{id}")
  static createDdu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
