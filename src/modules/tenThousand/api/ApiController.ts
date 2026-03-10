import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("api")
export default class ApiController {
  @operation({
    summary: "Get Api",
  })
  @get()
  static getApi = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Api",
  })
  @post("{id}")
  static createApi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
