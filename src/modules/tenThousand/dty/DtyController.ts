import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dty")
export default class DtyController {
  @operation({
    summary: "Get Dty",
  })
  @get()
  static getDty = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dty",
  })
  @post("{id}")
  static createDty = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
