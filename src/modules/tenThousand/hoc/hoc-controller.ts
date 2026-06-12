import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hoc")
export default class HocController {
  @operation({
    summary: "Get Hoc",
  })
  @get()
  static getHoc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hoc",
  })
  @post("{id}")
  static createHoc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
