import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ase")
export default class AseController {
  @operation({
    summary: "Get Ase",
  })
  @get()
  static getAse = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ase",
  })
  @post("{id}")
  static createAse = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
