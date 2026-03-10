import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("grz")
export default class GrzController {
  @operation({
    summary: "Get Grz",
  })
  @get()
  static getGrz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Grz",
  })
  @post("{id}")
  static createGrz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
