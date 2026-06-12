import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mlg")
export default class MlgController {
  @operation({
    summary: "Get Mlg",
  })
  @get()
  static getMlg = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mlg",
  })
  @post("{id}")
  static createMlg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
