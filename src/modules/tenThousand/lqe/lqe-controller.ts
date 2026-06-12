import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lqe")
export default class LqeController {
  @operation({
    summary: "Get Lqe",
  })
  @get()
  static getLqe = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lqe",
  })
  @post("{id}")
  static createLqe = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
