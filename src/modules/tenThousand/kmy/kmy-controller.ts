import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kmy")
export default class KmyController {
  @operation({
    summary: "Get Kmy",
  })
  @get()
  static getKmy = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kmy",
  })
  @post("{id}")
  static createKmy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
