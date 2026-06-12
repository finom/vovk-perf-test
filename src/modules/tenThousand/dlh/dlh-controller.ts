import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dlh")
export default class DlhController {
  @operation({
    summary: "Get Dlh",
  })
  @get()
  static getDlh = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dlh",
  })
  @post("{id}")
  static createDlh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
