import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hir")
export default class HirController {
  @operation({
    summary: "Get Hir",
  })
  @get()
  static getHir = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hir",
  })
  @post("{id}")
  static createHir = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
