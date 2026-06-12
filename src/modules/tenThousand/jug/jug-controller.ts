import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jug")
export default class JugController {
  @operation({
    summary: "Get Jug",
  })
  @get()
  static getJug = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jug",
  })
  @post("{id}")
  static createJug = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
