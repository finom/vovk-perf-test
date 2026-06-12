import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mui")
export default class MuiController {
  @operation({
    summary: "Get Mui",
  })
  @get()
  static getMui = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mui",
  })
  @post("{id}")
  static createMui = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
