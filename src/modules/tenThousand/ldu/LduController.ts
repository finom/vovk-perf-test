import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ldu")
export default class LduController {
  @operation({
    summary: "Get Ldu",
  })
  @get()
  static getLdu = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ldu",
  })
  @post("{id}")
  static createLdu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
