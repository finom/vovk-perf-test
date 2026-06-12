import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("isl")
export default class IslController {
  @operation({
    summary: "Get Isl",
  })
  @get()
  static getIsl = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Isl",
  })
  @post("{id}")
  static createIsl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
