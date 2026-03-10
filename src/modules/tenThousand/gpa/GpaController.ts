import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gpa")
export default class GpaController {
  @operation({
    summary: "Get Gpa",
  })
  @get()
  static getGpa = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gpa",
  })
  @post("{id}")
  static createGpa = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
