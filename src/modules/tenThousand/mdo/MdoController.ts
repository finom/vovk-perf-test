import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mdo")
export default class MdoController {
  @operation({
    summary: "Get Mdo",
  })
  @get()
  static getMdo = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mdo",
  })
  @post("{id}")
  static createMdo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
